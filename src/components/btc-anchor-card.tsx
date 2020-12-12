import * as React from 'react';
import { Box, FlexProps } from '@stacks/ui';
import { Rows } from '@components/rows';
import { truncateMiddle } from '@common/utils';
import { Section } from '@components/section';
import { Block } from '@blockstack/stacks-blockchain-api-types';
import { Link } from '@components/typography';

export const BtcAnchorBlockCard: React.FC<FlexProps & { block: Block }> = ({ block, ...rest }) => (
  <Section title="Bitcoin anchor" {...rest}>
    <Box px="base">
      <Rows
        noTopBorder
        inline
        items={[
          {
            label: {
              children: 'Bitcoin block',
            },
            children: `#${block.burn_block_height}`,
          },
          {
            label: {
              children: 'Bitcoin hash',
            },
            children: (
              <Link
                as="a"
                target="_blank"
                href={`https://www.blockchain.com/btc/block/${block.burn_block_hash}`}
              >
                {truncateMiddle(block.burn_block_hash, 8)}
              </Link>
            ),
            copy: block?.burn_block_hash,
          },
          {
            label: {
              children: 'Anchor transaction',
            },
            children: (
              <Link
                as="a"
                target="_blank"
                href={`https://www.blockchain.com/btc/tx/${block.miner_txid}`}
              >
                {truncateMiddle(block.miner_txid, 8)}
              </Link>
            ),
            copy: block?.miner_txid,
          },
        ]}
      />
    </Box>
  </Section>
);