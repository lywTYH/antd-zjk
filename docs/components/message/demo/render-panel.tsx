import { message } from 'antd';
import React from 'react';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;

export default () => <InternalPanel content="Hello World!" type="error" />;
