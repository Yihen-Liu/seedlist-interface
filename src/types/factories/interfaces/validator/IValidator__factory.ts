/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IValidator,
  IValidatorInterface,
} from "../../../interfaces/validator/IValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "isValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IValidator__factory {
  static readonly abi = _abi;
  static createInterface(): IValidatorInterface {
    return new utils.Interface(_abi) as IValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IValidator {
    return new Contract(address, _abi, signerOrProvider) as IValidator;
  }
}
