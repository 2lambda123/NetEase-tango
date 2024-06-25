import React from 'react';
import { Box } from 'coral-system';
import { CollapsePanel } from '@music163/tango-ui';
import { StateTree } from './state-tree';
import { ComponentsTree, ComponentsTreeProps } from './components-tree';

export interface OutlineViewProps extends ComponentsTreeProps {
  /**
   * 展示状态视图
   */
  showStateView?: boolean;
  /**
   * 状态视图中可展示的子节点
   */
  pickStateViewProperties?: string[];
}

export function OutlinePanel({
  showStateView = true,
  pickStateViewProperties,
  ...treeProps
}: OutlineViewProps) {
  return (
    <Box height="100%" position="relative">
      <CollapsePanel
        title="页面结构"
        maxHeight={showStateView ? '90%' : '100%'}
        collapsed={!showStateView ? false : undefined}
        overflowY="auto"
        showBottomBorder={showStateView}
      >
        <ComponentsTree {...treeProps} />
      </CollapsePanel>
      {showStateView && <StateTree pickProperties={pickStateViewProperties} />}
    </Box>
  );
}
