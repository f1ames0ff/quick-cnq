import { InjectionToken } from '@angular/core';
import { State } from '../types';

export const INITIAL_STATE = new InjectionToken<State>('INITIAL_STATE');
