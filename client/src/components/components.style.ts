import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const Container = styled.div`
display: flex;
flex-direction:column;
width: 100%;
border: 1px solid grey;
border-radius:10px;
height:100%;

div.filter{
display: flex;
justify-content: space-between;
width:75%;
align-self:center;
margin-top:15vh;
margin-bottom:10vh;
background: #f5f6f8;
}

div.table{
  display: flex;
width:75%;
align-self:center;
}
`;

export const Table = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 65%;
  margin: auto;
  padding-top: 20px;

.inner_row {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  font-family: Roboto;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #eeeeee;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
  padding-left: 20px;
}

.inner_table_head {
      background: #f5f6f8;
      box-shadow: inset 0px -1px 0px #c1c8d3;
    }
.inner_table_body {
  flex: 1;
  overflow-y: scroll;
  max-height: 327px;
}

.inner_body_row {
  display: flex;
}

.inner_body_row:hover > div {
  background-color: #e9f5ff;
}

.inner_header_row {
  display: flex;
  height: 51px;
  overflow-x: auto;
}

.inner_header_row > div {
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: bold;
  color: #212121;
  text-align: right;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  font-family: Roboto;
  padding-left: 16px;
  box-shadow: inset -0.5px 0px 0px #C1C8D3, inset 0px -1px 0px #C1C8D3;
}
`;

export const ComboBox = styled(Autocomplete)`
display:flex;
`;

export const DatePicker = styled(DesktopDatePicker)`
background: #ffffff;
`;

export const ArrowRightIcon = styled(ArrowCircleRightIcon)`
margin-bottom: auto;
margin-top: auto;
cursor: pointer`;

