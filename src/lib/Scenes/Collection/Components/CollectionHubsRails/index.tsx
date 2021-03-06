import { Box } from "@artsy/palette"
import { CollectionHubsRails_linkedCollections } from "__generated__/CollectionHubsRails_linkedCollections.graphql"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtistSeriesRailContainer as TrendingArtistSeriesRail } from "./ArtistSeries/ArtistSeriesRail"

interface CollectionsHubRailsProps {
  linkedCollections: CollectionHubsRails_linkedCollections
}

export const CollectionsHubRails: React.SFC<CollectionsHubRailsProps> = props => {
  const { linkedCollections } = props
  const railForGroupType = (collectionGroup: any) => {
    const { groupType } = collectionGroup
    switch (groupType) {
      case "ArtistSeries":
        return <TrendingArtistSeriesRail collectionGroup={collectionGroup} {...props} />
      default:
        return null
    }
  }

  return (
    <>
      {linkedCollections.map(collectionGroup => (
        <Box key={collectionGroup.groupType}>{railForGroupType(collectionGroup)}</Box>
      ))}
    </>
  )
}

export const CollectionsHubRailsContainer = createFragmentContainer(CollectionsHubRails, {
  linkedCollections: graphql`
    fragment CollectionHubsRails_linkedCollections on MarketingCollectionGroup @relay(plural: true) {
      groupType
      ...ArtistSeriesRail_collectionGroup
    }
  `,
})
