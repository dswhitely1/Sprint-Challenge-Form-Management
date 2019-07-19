import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  
  ${props => props.form && css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div {
      display: flex;
      flex-direction: column;
    form {
      border: 1px double black;
      box-shadow: 1px 1px 5px blue;
      padding: 20px;
      display: flex;
      flex-direction: column;
      h1 {
        text-align: center;
      }
      label {
        margin-top: 10px;
      }
      input {
        height: 20px;
        padding: 5px 10px;
        border-radius: 4px;
      }
      button {
        width: 100px;
        margin-top: 20px;
        height: 38px;
        border: 2px double black;
        background-color: white;
        border-radius: 4px;
        &:hover {
          background-color: black;
          color: white;
          cursor: pointer;
        }
      }
      span {
        color: crimson;
        padding: 5px 10px;
      }
    }
    }
`}
  ${props => props.recipe && css`
    display: flex;
    flex-direction: column;
`}

`;