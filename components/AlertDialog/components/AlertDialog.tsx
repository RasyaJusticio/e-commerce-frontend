import React from "react";
import { AlertDialogOpenProps } from "../types/alertDialogOpenProps";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialog as UIAlertDialog,
} from "@/components/ui/alert-dialog";

export type AlertDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  props?: AlertDialogOpenProps;
};

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  setIsOpen,
  props,
}) => {
  return (
    <UIAlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props?.title ?? "Dialog Title"}</AlertDialogTitle>
          {props?.description && (
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {props?.cancelLabel ? (
            typeof props.cancelLabel === "string" ? (
              <AlertDialogCancel>{props.cancelLabel}</AlertDialogCancel>
            ) : (
              <AlertDialogCancel asChild>
                {props.cancelLabel(setIsOpen)}
              </AlertDialogCancel>
            )
          ) : (
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          )}

          {props?.actionLabel ? (
            typeof props.actionLabel === "string" ? (
              <AlertDialogAction
                onClick={() => props?.onAction && props.onAction(setIsOpen)}
              >
                {props.actionLabel}
              </AlertDialogAction>
            ) : (
              props.actionLabel(setIsOpen)
            )
          ) : (
            <AlertDialogAction
              onClick={() => props?.onAction && props.onAction(setIsOpen)}
            >
              Continue
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </UIAlertDialog>
  );
};

export default AlertDialog;
