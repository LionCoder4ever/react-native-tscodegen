
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeBooleanTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export type Boolean = boolean;

type AnotherBoolean = Boolean;

export interface Spec extends TurboModule {
  getBoolean(arg: boolean): boolean;
  getBooleanWithAlias(arg: Boolean): AnotherBoolean;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


