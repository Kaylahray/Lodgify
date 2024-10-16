/* eslint-disable react/prop-types */
export const Message = ({ message = {} }) => {
  const sent = !!message.sent;
  const Avatar = ({ show }) => {
    if (show) {
      return (
        <div className="overflow-hidden rounded-full min-w-9 min-h-9">
          <img
            src={message.avatar + "?t=" + message.id}
            className="object-cover w-9 h-9"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`flex items-end gap-2 ${
        sent ? "justify-end" : "justify-start"
      }`}
    >
      <Avatar show={!sent} />

      <div
        className={`flex flex-col justify-between name-group ${
          sent ? "items-end pl-20" : "items-start pr-20"
        }`}
      >
        <div
          className={`p-4 rounded-xl ${
            sent
              ? "rounded-br-none bg-[#E7F68E]"
              : "bg-[#D5F6E5] rounded-bl-none"
          }`}
        >
          {message.text.map((text, i) => (
            <p className="text-sm leading-4" key={i}>
              {text}
            </p>
          ))}
        </div>
        <p className="mt-2 text-xs leading-3 text-gray-400">
          {message.createdAt}
        </p>
      </div>

      <Avatar show={sent} />
    </div>
  );
};
