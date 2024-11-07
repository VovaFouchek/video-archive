import { useNotification } from "@/config/context/NotificationContext";

interface useModalProps {
  title: string;
  content: string;
  handleConfirmed: () => void;
}

const useModal = ({ title, content, handleConfirmed }: useModalProps) => {
  const { modalApi } = useNotification();

  const handleShowModal = () => {
    modalApi.confirm({
      title: title,
      content: content,
      okText: "OK",
      cancelText: "Cancel",
      onOk: () => handleConfirmed(),
      onCancel: () => {},
      okButtonProps: {
        style: { backgroundColor: "#580B82", boxShadow: "none" },
      },
    });
  };

  return { handleShowModal };
};

export default useModal;
