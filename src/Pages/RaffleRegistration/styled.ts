import styled from "styled-components";

export const Form = styled.form`
  height: 100vh;
  overflow-y: scroll;
  margin: 0px 20px;
`;

export const CarregarImg = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
  background: ${(props) => props.theme["backgroundImage"]};
  padding: 80px 0px;
  border-radius: 16px;
`;

export const Input = styled.input`
  padding-left: 10px;
  padding: 16px 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;
  &:focus {
    outline-style: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
  }
`;

export const TextArear = styled.textarea`
  padding-left: 10px;
  padding: 16px 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;
  resize: none;

  &:focus {
    outline-style: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme["placeholder"]};
  }
`;

export const CompositeValues = styled.div`
  display: flex;
  gap: 16px;
  label {
    font-size: 0.75rem;
  }

  input {
    margin-top: 2px;
  }
`;

export const ContainerCalendar = styled.div`
  width: 100%;
  margin: 0 auto;
  .react-calendar {
    width: 100%;
    border-radius: 10px;
    max-width: 100%;
    background: white;
    border: 1px solid #e2e8f0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
    border-color: red;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
    border-radius: 10px;
  }
  .react-calendar__tile--now {
    background: #4cca76;
    border-radius: 10px;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${(props) => props.theme["green-200"]};
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: ${(props) => props.theme["green-500"]};
    color: white;
    border-radius: 10px;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${(props) => props.theme["green-500"]};
    border-radius: 10px;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  button {
    width: 100%;
    background: ${(props) => props.theme["green-500"]};
    border: none;
    border-radius: 6px;
    padding: 10px;
    color: ${(props) => props.theme["white"]};
    margin-top: 30px;
    margin-bottom: 10px;

    &:first-child {
      background: ${(props) => props.theme["green-100"]};
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;
