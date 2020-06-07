import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('create host components in wechat', () => {
  runTest(
    'createHostComponent',
    Platform.wechat,
    path.resolve(__dirname, `../fixtures/createHostComponent/expected/wechat`)
  );
});