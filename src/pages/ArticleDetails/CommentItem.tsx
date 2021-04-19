import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import { Comment } from '../../types/Comment';
import { colors, fontSizes } from '../../styles';

interface Props {
  comment: Comment;
}

const StyledComment = styled.div`
  border: solid 1px ${colors.grey};
  border-radius: 12px;
  padding: 8px;
`;

const Author = styled.h4`
  font-size: ${fontSizes.medium};
  color: ${colors.grey};
  margin: 0;
`;

const Time = styled.time`
  margin: 4px 0;
  font-size: ${fontSizes.small};
`;

const Content = styled.p`
  margin: 6px 0;
`;

const CommentItem: React.FC<Props> = ({ comment }) => {
  return (
    <StyledComment>
      <Author>{comment.author.email}</Author>
      <Time>{dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Time>
      <Content>{comment.content}</Content>
    </StyledComment>
  );
};

export default CommentItem;
