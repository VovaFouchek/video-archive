import React, { createContext, useContext } from "react";

import { MessageInstance } from "antd/es/message/interface";
import useModal from "antd/es/modal/useModal";
import message from "antd/es/message";

interface NotificationContextProps {
  messageApi: MessageInstance;
  modalApi: any; // TODO: Fix type
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, messageContextHolder] = message.useMessage();
  const [modalApi, modalContextHolder] = useModal();

  return (
    <NotificationContext.Provider value={{ messageApi, modalApi }}>
      {messageContextHolder}
      {modalContextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }

  return context;
};
