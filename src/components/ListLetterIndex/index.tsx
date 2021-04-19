import * as React from "react";
import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListLetterIndexProps } from "./types"
import { styles } from "./styles";
import { ISectionData } from "../AlphabetList/types";

export const ListLetterIndex: React.FC<ListLetterIndexProps> = ({
  sectionData,
  onPressLetter,
  indexLetterStyle,
  indexLetterContainerStyle,
  renderCustomIndexLetter
}) => {
  const onRenderCustomIndexLetter = ({ item, index }: { item: ISectionData, index: number }) => {
    const onPress = () => onPressLetter(index)

    if (renderCustomIndexLetter) {
      return renderCustomIndexLetter({
        item,
        index,
        onPress,
      });
    }

    return (
      <TouchableOpacity testID="indexItem" onPress={onPress}>
        <View testID="indexItem__title-container" style={[styles.letterIndexItem, indexLetterContainerStyle]}>
          <Text testID="indexItem__title" style={[styles.letterIndexLabel, indexLetterStyle]}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [navHeight, setNavHeight] = useState(0)

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout
    setNavHeight(height)
  }

  return (
    <View style={[
      styles.letterIndexContainer,
      {
        transform: [
          {
            translateY: -(navHeight / 2)
          }
        ]
      }
    ]}>
      <FlatList
        onLayout={onLayout}
        contentContainerStyle={styles.letterIndexList}
        data={sectionData}
        keyExtractor={i => i.title}
        scrollEnabled={false}
        renderItem={onRenderCustomIndexLetter}
      />
    </View>
  )
}