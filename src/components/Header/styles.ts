import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        transition: border-bottom 0.2s;
        padding: 10px;

        & + a {
          margin-left: 32px;
        }

        &.list {
          border-bottom: 2px solid #ff872c;
        }

        &.import {
          border-bottom: 2px solid #ff872c;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
