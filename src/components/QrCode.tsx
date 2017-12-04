import * as React from 'react';
import * as qrcode from 'qrcode-generator';

export interface QrCodeProps {
    text: string;
}

const qrStyles = {
    display: 'inline-block'
};

export class QrCode extends React.Component<QrCodeProps, {}> {
    render() {
        const qr = qrcode(12, 'H');
        qr.addData(this.props.text);
        qr.make();
        const tag = qr.createImgTag(2, 0);
        return <span className="qr-code" dangerouslySetInnerHTML={{__html: tag}}></span>;
    }
}
