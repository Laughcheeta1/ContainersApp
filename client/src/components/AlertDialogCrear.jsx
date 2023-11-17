import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../styles/popUp.css";

const AlertDialogCrear = ({ buttonMessage, descriptionMessage, onSubmit }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button style={{ width: "100%" }} className="btn btn-verde">
        {buttonMessage}
      </button>
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <AlertDialog.Overlay className="popUpOverlay" />

      <AlertDialog.Content className="popUpContent">
        <AlertDialog.Title className="popUpTitle">
          ¿Estás seguro?
        </AlertDialog.Title>

        <AlertDialog.Description className="popUpDescription">
          {descriptionMessage}
        </AlertDialog.Description>

        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="btn btn-gris">Cancelar</button>
          </AlertDialog.Cancel>

          <AlertDialog.Action
            asChild
            onClick={() => {
              onSubmit();
            }}>
            <button type="submit" className="btn btn-verde">
              Guardar
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogCrear;
