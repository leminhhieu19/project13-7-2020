import styled from "styled-components";

const StyledHeader = styled.div`
    .menuItem{
        overflow: hidden;
        background-color: #aaa;
        padding: 20px 10px;
    }
    .menuItem a{
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
    }
    .menuItem .del{
        color: red;
    }
    .menuItem a:hover {
        background-color: #ddd;
        color: black;
      }
      .menuItem a.active {
        background-color: dodgerblue;
        color: white;
      }
    .headerLink {
        float: right;
      }
      @media screen and (max-width: 500px) {
        .menuItem a {
          float: none;
          display: block;
          text-align: left;
        }
        .headerLink {
          float: none;
        }
      }
`
export default StyledHeader;