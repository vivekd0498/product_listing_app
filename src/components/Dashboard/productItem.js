import React from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {color_list} from '../../helper/localData';
import {fontSize, hp, wp} from '../../helper/utilities';

const ProductItem = ({source, productName, price, brands, colors}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerMainView}>
        <Image source={source} style={styles.imageStyle} />
        <View style={styles.rightSideView}>
          <Text style={styles.productTitleStyle}>{productName}</Text>
          <Text style={styles.priceTitle}>
            {stringConst.priceTitle}
            <Text style={[styles.priceTitle, {fontWeight: '400'}]}>
              {price}
            </Text>
          </Text>
          <Text style={styles.priceTitle}>
            {stringConst.brandTitle}
            <Text style={[styles.priceTitle, {fontWeight: '400'}]}>
              {brands}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.colorMainView}>
        <Text style={styles.colorTitle}>{stringConst.colors}</Text>
        <FlatList
          data={color_list}
          style={styles.flatListStyle}
          renderItem={({item: colorItem, idx}) => {
            return (
              <View style={styles.colorInnerView}>
                <View style={styles.radioMainView}>
                  {colors?.filter((val, indx) => {
                    return val === colorItem;
                  }).length > 0 && <View style={styles.radioInnerView} />}
                </View>
                <Text style={styles.colorNameText}>{colorItem}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(3),
    borderBottomWidth: wp(0.3),
    borderBottomColor: colors.grayBorder,
  },
  innerMainView: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(11),
  },
  rightSideView: {
    flex: 1,
    marginLeft: wp(4.5),
  },
  productTitleStyle: {
    color: colors.black,
    fontSize: fontSize(16),
  },
  priceTitle: {
    marginTop: hp(0.8),
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(16),
  },
  colorMainView: {
    marginTop: hp(2),
  },
  colorTitle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(18),
  },
  flatListStyle: {
    flexDirection: 'row',
  },
  colorInnerView: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioMainView: {
    width: wp(5),
    height: wp(5),
    borderWidth: wp(0.5),
    alignItems: 'center',
    borderRadius: wp(2.5),
    justifyContent: 'center',
    borderColor: colors.black,
  },
  radioInnerView: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    backgroundColor: colors.black,
  },
  colorNameText: {
    color: colors.black,
    fontSize: fontSize(16),
    marginHorizontal: wp(2.5),
  },
});

export default ProductItem;
