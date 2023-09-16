import React from 'react';
import { SaveCancelDiv } from '../ProfileStyledComponents/SaveCancelDiv';
import { CancelButton, SaveButton } from '../ProfileStyledComponents/Save-CancelButtons';

const SaveCancelButtons = ({ cancelHandler, saveHandler }) => {
  return (
    <SaveCancelDiv>
      <CancelButton onClick={cancelHandler}>cancel</CancelButton>
      <SaveButton onClick={saveHandler}>save</SaveButton>
    </SaveCancelDiv>
  );
};

export default SaveCancelButtons;
