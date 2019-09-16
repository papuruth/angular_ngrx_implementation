import { IConfig } from '../../models/iconfig.interface';

export interface IConfigState {
    config: IConfig
}

export const initialConfigState: IConfigState = {
    config: null
}