import {BifrostBridge} from '@schettnet/bridge'
import BridgeDrop, {references} from 'drop'

BridgeDrop.bridge = new BifrostBridge({
  httpUrl: 'https://ccms.snek.at/graphql/'
})

export const BridgeSession = BridgeDrop.bridge.session
export const DropAPI = BridgeDrop.buildIn
export const DropAPIReferences: any = references
