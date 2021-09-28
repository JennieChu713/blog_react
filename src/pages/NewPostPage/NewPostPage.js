import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { newPost, getMe } from "../../WebAPI";
import { getAuthToken } from "../../utils";
import { AuthContext } from "../../AuthContexts";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 50%;
  text-align: center;
`;
const PostTitle = styled.h2``;

const ErrorMsg = styled.div`
  color: #e83929;
  font-size: 1.4rem;
  margin: 1.4rem auto;
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 1.2rem 0;
`;

const Input = styled.input`
  width: 100%;

  &[type="submit"] {
    width: 30%;
    margin: 0 auto 1rem;
    background: none;
    border: 1px solid #6c2c2f;
    color: #6c2c2f;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }
  &[type="submit"]:hover {
    background: #6c2c2f;
    color: white;
  }
`;
const InputContent = styled.textarea`
  margin-bottom: 1.2rem;
`;
const Label = styled.label`
  margin-right: 2%;
`;

export default function NewPostPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  // handle functioning
  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();

    // newPost(title, body, userId)

    // register(username, nickname, password).then((data) => {
    //   if (data.ok === 0) {
    //     setAuthToken(null);
    //     return setErrorMessage(data.message);
    //   }

    //     setAuthToken(data.token);

    //     getMe().then((res) => {
    //       if (res.ok !== 1) {
    //         return setErrorMessage(res.toString());
    //       }
    //       setUser(res.data);
    //       history.push("/");
    //     });
    //   });
  };
  const handleOnFocus = () => {
    setErrorMessage("");
  };

  //render
  return (
    <FormContainer onSubmit={handleSubmit}>
      <PostTitle>New Post</PostTitle>
      <InputWrapper>
        <Label for="title">Title: </Label>
        <Input
          id="title"
          name="title"
          placeholder="Post Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={handleOnFocus}
        />
      </InputWrapper>
      <InputContent
        rows="10"
        name="body"
        placeholder="Post Content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onFocus={handleOnFocus}
      />
      <Input type="submit" value="Submit" />
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </FormContainer>
  );
}
