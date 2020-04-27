import * as React from 'react';
import { Text } from '@blockstack/ui';
import { Status, Statuses } from '@components/status';
import { Tag } from '@components/tags';

import { Box, Stack, BoxProps } from '@blockstack/ui';
import { TransactionType } from '@models/transaction.interface';

export interface TitleProps extends BoxProps {
  status: Statuses;
  type: TransactionType | TransactionType[];
  contractName?: string;
}

const Tags = ({ type, ...rest }: { type: TransactionType | TransactionType[] }) =>
  Array.isArray(type) ? (
    <Box {...rest}>
      <Stack isInline spacing="tight">
        {type.map((t: TransactionType, key) => (
          <Tag type={t} key={key} />
        ))}
      </Stack>
    </Box>
  ) : (
    <Tag type={type} {...rest} />
  );

const TitleDetail: React.FC<TitleProps> = ({ status, type, ...rest }) => {
  return (
    <Box {...rest}>
      <Stack isInline spacing="tight">
        <Tags type={type} />
        <Status status={status} />
      </Stack>
    </Box>
  );
};

export const TransactionTitle: React.FC<TitleProps> = ({ status, type, ...rest }) => (
  <Stack spacing="base" {...rest}>
    <Box>
      <Text as="h1" textStyle="display.large" fontSize="36px" color="var(--colors-text-title)">
        Transaction details
      </Text>
    </Box>
    <TitleDetail status={status} type={type} />
  </Stack>
);
