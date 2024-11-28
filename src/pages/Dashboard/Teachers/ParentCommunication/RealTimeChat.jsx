import TitleComponent from "../../../../styledComponents/TitleComponent";

const RealTimeChat = () => {
  return (
    <div>
      <TitleComponent title="Real-Time Chat" />
      <p>
        Features:
        <br />
        Real-time messaging between teachers and parents.
        <br />
        Chat history saved and available for reference.
        <br />
        Option to initiate a video call for parent-teacher meetings (if
        supported).
      </p>
    </div>
  );
};

export default RealTimeChat;
