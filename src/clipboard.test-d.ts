// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { expectType } from 'tsd';
import * as Clipboard from './clipboard';

expectType<Clipboard>(new Clipboard('.btn'));
