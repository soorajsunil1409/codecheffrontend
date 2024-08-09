const MessageBox = ({ chat }) => {
    return (
        <div className="grid grid-cols-1 pt-5">
            {chat.messageFrom == "other" ?
                <div className="col-start-1">
                    <div className="p-5 bg-[#b8d1a2] w-[270px] rounded-3xl rounded-bl-sm">
                        {chat.messageBody}
                    </div>
                    <div className="text-sm mt-3 text-left">
                        {chat.time}
                    </div>
                </div>
                :
                <div className="col-start-2">
                    <div className="p-5 bg-[#bff7fd] w-[270px] rounded-3xl rounded-br-sm">
                        {chat.messageBody}
                    </div>
                    <div className="text-sm mt-3 text-right">
                        {chat.time}
                    </div>
                </div>
            }
        </div>
    )
}
export default MessageBox