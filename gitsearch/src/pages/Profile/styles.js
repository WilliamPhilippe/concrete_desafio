import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  height: 100%;

  padding: 10px 10px;
`;

export const SideContainer = styled.div`
  background: #eee;

  position: fixed;
  top: 50%;
  left: 18%;
  transform: translateY(-50%);

  height: 800px;
  max-height: 80%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 1px 1px;
`;

export const Avatar = styled.div`
  img {
    width: 280px;
    height: 280px;
  }
`;

export const Info = styled.div``;

export const Details = styled.div``;

export const Item = styled.div``;

export const RepoContainer = styled.div`
  background: #eee;

  width: 50%;
  height: 100%;

  margin: 0 auto;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding-left: 180px;
`;

export const Repository = styled.div`
  p {
    font-size: 32px;
    color: #ac53f2;
  }

  span {
    font-size: 15px;
    color: #333;
    margin-left: 10px;
  }
`;
