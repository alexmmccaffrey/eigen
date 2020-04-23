import { Flex, Spacer } from "@artsy/palette"
import { ViewingRoomArtworkRail_viewingRoomArtworks } from "__generated__/ViewingRoomArtworkRail_viewingRoomArtworks.graphql"
import { AboveTheFoldFlatList } from "lib/Components/AboveTheFoldFlatList"
import OpaqueImageView from "lib/Components/OpaqueImageView/OpaqueImageView"
import { SectionTitle } from "lib/Components/SectionTitle"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { Schema } from "lib/utils/track"
import React, { useRef } from "react"
import { View } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { useTracking } from "react-tracking"
import styled from "styled-components/native"

interface ViewingRoomArtworkRailProps {
  viewingRoomArtworks: ViewingRoomArtworkRail_viewingRoomArtworks
}

const ArtworkCard = styled.TouchableHighlight`
  border-radius: 2px;
  overflow: hidden;
`
export const ViewingRoomArtworkRail: React.FC<ViewingRoomArtworkRailProps> = props => {
  const artworks = props.viewingRoomArtworks.artworks.edges
  const tracking = useTracking()
  const navRef = useRef()
  return (
    <View ref={navRef}>
      <Flex>
        <SectionTitle
          title={`${props.viewingRoomArtworks.artworks.totalCount} artworks`}
          onPress={() =>
            SwitchBoard.presentNavigationViewController(
              navRef.current,
              "/viewing-room/this-is-a-test-viewing-room-id/artworks"
            )
          }
        />
        <AboveTheFoldFlatList
          horizontal
          style={{ height: 100 }}
          ItemSeparatorComponent={() => <Spacer mr={0.5}></Spacer>}
          showsHorizontalScrollIndicator={false}
          data={artworks}
          initialNumToRender={4}
          windowSize={3}
          renderItem={({ item }) => (
            <ArtworkCard
              onPress={() => {
                tracking.trackEvent({
                  action_name: Schema.ActionNames.ArtworkRail,
                  context_screen: Schema.PageNames.ViewingRoom,
                  context_screen_owner_type: Schema.OwnerEntityTypes.ViewingRoom,
                })
                SwitchBoard.presentNavigationViewController(navRef.current, item.node.href)
              }}
            >
              <OpaqueImageView imageURL={item.node.image.url} width={100} height={100} />
            </ArtworkCard>
          )}
          keyExtractor={(item, index) => String(item.node.href || index)}
        />
      </Flex>
    </View>
  )
}

export const ViewingRoomArtworkRailContainer = createFragmentContainer(ViewingRoomArtworkRail, {
  viewingRoomArtworks: graphql`
    fragment ViewingRoomArtworkRail_viewingRoomArtworks on ViewingRoom {
      artworks: artworksConnection(first: 5) {
        totalCount
        edges {
          node {
            href
            artistNames
            image {
              url(version: "square")
            }
            saleMessage
          }
        }
      }
    }
  `,
})
