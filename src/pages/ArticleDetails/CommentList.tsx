import React from 'react';
import styled from 'styled-components';
import { Comment } from '../../types/Comment';
import CommentItem from './CommentItem';

interface Props {
  comments: Comment[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comment) => {
        return <CommentItem comment={comment} />;
      })}
    </Wrapper>
  );
};

export default CommentList;
