/**
 * Mainnet Cash
 * A developer friendly bitcoin cash wallet api  This API is currently in active development, breaking changes may be made prior to official release of version 1.  **Important:** This library is in active development 
 *
 * The version of the OpenAPI document: 0.0.1-rc
 * Contact: hello@mainnet.cash
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SendRequestItem } from './sendRequestItem';
import { SerializedWallet } from './serializedWallet';

export class SendRequest extends SerializedWallet {
    'to'?: Array<SendRequestItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<SendRequestItem>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendRequest.attributeTypeMap);
    }
}
