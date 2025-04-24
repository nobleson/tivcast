'use client';

import type { PlayerProps } from 'next-video';
import MuxPlayer from '@mux/mux-player-react';

export default function Player(props: PlayerProps) {
  let { asset, src, poster, blurDataURL, theme, ...rest } = props;
  const playbackId = asset?.providerMetadata?.mux?.playbackId;

  return <MuxPlayer playbackId={playbackId} {...rest} />
}