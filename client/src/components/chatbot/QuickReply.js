import React from 'react';

const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        return (
            <a style={{ margin: 3}} className="btn-floating btn-large waves-effect waves-light blue"
               onClick={() =>
                   props.click(
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue
                   )}
               >
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    } else {
        return (
            <a style={{ margin: 3}} className="btn-floating btn-large waves-effect waves-light blue"
               href={props.reply.structValue.fields.link.stringValue}>
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }

};

export default QuickReply;