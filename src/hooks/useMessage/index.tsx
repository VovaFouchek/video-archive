import { useNotification } from "@/config/context/NotificationContext";
import { NotificationType } from "@/shared/types";

interface useMessageProps {
  type: NotificationType;
  content: string;
}

const useMessage = ({ type, content }: useMessageProps) => {
  const { messageApi } = useNotification();

  const showInfoMessage = () => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  return { showInfoMessage };
};

export default useMessage;
