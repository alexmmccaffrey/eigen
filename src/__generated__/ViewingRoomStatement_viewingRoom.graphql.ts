/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomStatement_viewingRoom = {
    readonly body: string | null;
    readonly pullQuote: string | null;
    readonly introStatement: string | null;
    readonly artworksForCount: {
        readonly totalCount: number | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ViewingRoomSubsections_viewingRoomSubsections" | "ViewingRoomArtworkRail_viewingRoomArtworks">;
    readonly " $refType": "ViewingRoomStatement_viewingRoom";
};
export type ViewingRoomStatement_viewingRoom$data = ViewingRoomStatement_viewingRoom;
export type ViewingRoomStatement_viewingRoom$key = {
    readonly " $data"?: ViewingRoomStatement_viewingRoom$data;
    readonly " $fragmentRefs": FragmentRefs<"ViewingRoomStatement_viewingRoom">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ViewingRoomStatement_viewingRoom",
  "type": "ViewingRoom",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pullQuote",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "introStatement",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "artworksForCount",
      "name": "artworksConnection",
      "storageKey": "artworksConnection(first:1)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalCount",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ViewingRoomSubsections_viewingRoomSubsections",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ViewingRoomArtworkRail_viewingRoomArtworks",
      "args": null
    }
  ]
};
(node as any).hash = '93a18259c8af8251e84e27c52fee4c44';
export default node;
