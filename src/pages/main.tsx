import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import ReactModal from 'react-modal';
import { GetState, IUserState } from '../types/user';
import { IState } from '../redux/store';

import getApi from '../actions/request';
import postApi from '../actions/request/post';
import deleteApi from '../actions/request/delete';
import patchApi from '../actions/request/patch';

import DeleteModalButton from '../components/DeleteModal/DeleteModalButton';
import DeleteModal from '../components/DeleteModal';
import PatchModal from '../components/PatchModal';
import PatchModalInput from '../components/PatchModal/PatchModalInput';
import PatchModalTextArea from '../components/PatchModal/PatchModalTextArea';
import PatchModalButton from '../components/PatchModal/PatchModalButton';
import Header from '../components/Header';
import Content from '../components/Content';
import ContentForm from '../components/Content/ContentForm';
import ContentFormInput from '../components/Content/ContentForm/ContentFormInput';
import ContentFormTextArea from '../components/Content/ContentForm/ContentFormTextArea';
import ContentFormButton from '../components/Content/ContentForm/ContentFormButton';
import ContentPost from '../components/Content/ContentPost';
import PostHeader from '../components/Content/ContentPost/PostHeader';
import PostDeleteButton from '../components/Content/ContentPost/PostHeader/PostDeleteButton';
import PostEditButton from '../components/Content/ContentPost/PostHeader/PostEditButton';
import PostContent from '../components/Content/ContentPost/PostContent';
import SignupFail from '../components/SignupFail';

export default function Main() {
  const stateStore = useSelector<IState, IUserState>((state) => state.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [api, setApi] = useState<GetState[]>([]);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [patchIsOpen, setPatchIsOpen] = useState(false);
  const [patchTitle, setPatchTitle] = useState('');
  const [patchContent, setPatchContent] = useState('');
  const [getId, setGetId] = useState<number>(0);

  ReactModal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRadius: 0,
    },
  };

  async function handleGet() {
    await getApi().then((item) => {
      const filter = item.results.map((value: GetState) => {
        return {
          id: value.id,
          username: value.username,
          created_datetime: formatDistanceToNow(new Date(value.created_datetime), { addSuffix: true }),
          title: value.title,
          content: value.content,
        };
      });
      setApi(filter);
    });
  }

  async function handlePost(event: React.SyntheticEvent) {
    event.preventDefault();

    await postApi(stateStore.username, title, content);

    handleGet();

    setTitle('');
    setContent('');
  }

  async function handleDelete(id: number) {
    await deleteApi(id);
    handleGet();

    setDeleteIsOpen(false);
  }

  async function handlePatch(id: number, getTitle: string, getContent: string) {
    await patchApi(id, getTitle, getContent);
    handleGet();

    setPatchIsOpen(false);
  }

  function openDeleteModal(id: number) {
    setDeleteIsOpen(true);

    setGetId(id);
  }

  function openPatchModal(id: number) {
    setPatchIsOpen(true);

    setGetId(id);
  }

  useEffect(() => {
    handleGet();
  }, []);

  return stateStore.username !== '' ? (
    <>
      <ReactModal isOpen={deleteIsOpen} onRequestClose={() => setDeleteIsOpen(false)} style={customStyles}>
        <DeleteModal label="Are you sure you want to delete this item?">
          <DeleteModalButton text="Cancel" onClick={() => setDeleteIsOpen(false)} />

          <DeleteModalButton text="OK" onClick={() => handleDelete(getId)} />
        </DeleteModal>
      </ReactModal>

      <ReactModal isOpen={patchIsOpen} onRequestClose={() => setPatchIsOpen(false)} style={customStyles}>
        <PatchModal label="Edit item">
          <PatchModalInput label="Title" value={patchTitle} onChange={(e) => setPatchTitle(e.target.value)} />

          <PatchModalTextArea label="Content" value={patchContent} onChange={(e) => setPatchContent(e.target.value)} />

          <PatchModalButton text="SAVE" onClick={() => handlePatch(getId, patchTitle, patchContent)} />
        </PatchModal>
      </ReactModal>

      <Header text="CodeLeap Network" />

      <Content>
        <ContentForm text="What's on your mind?" onSubmit={(event) => handlePost(event)}>
          <ContentFormInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <ContentFormTextArea label="Content" value={content} onChange={(e) => setContent(e.target.value)} />

          <ContentFormButton title={title} content={content} text="CREATE" />
        </ContentForm>

        <ContentPost>
          {api.map((item) => {
            return (
              <div key={item.id}>
                <PostHeader item={item} stateStore={stateStore}>
                  <PostDeleteButton onClick={() => openDeleteModal(item.id)} />

                  <PostEditButton onClick={() => openPatchModal(item.id)} />
                </PostHeader>

                <PostContent item={item} />
              </div>
            );
          })}
        </ContentPost>
      </Content>
    </>
  ) : (
    <SignupFail text="Please, Sign up to continue" buttonText="SIGN UP HERE" />
  );
}
