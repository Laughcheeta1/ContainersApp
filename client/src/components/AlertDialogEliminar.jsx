import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../styles/popUp.css";

const AlertDialogEliminar = ({ deleteMethod, objectID }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger className="btn btn-rojo" asChild>
      <button>Eliminar</button>
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <AlertDialog.Overlay className="popUpOverlay" />

      <AlertDialog.Content className="popUpContent">
        <AlertDialog.Title className="popUpTitle">
          ¿Estás seguro?
        </AlertDialog.Title>

        <AlertDialog.Description className="popUpDescription">
          Esta acción es irreversible y el elemento quedará completamente
          borrado.
        </AlertDialog.Description>

        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="btn btn-gris">Cancelar</button>
          </AlertDialog.Cancel>

          <AlertDialog.Action asChild>
            <button
              onClick={() => deleteMethod(objectID)}
              className="btn btn-rojo"
            >
              Eliminar
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogEliminar;
