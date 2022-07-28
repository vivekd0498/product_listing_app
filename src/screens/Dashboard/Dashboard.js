import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Header, ProductItem} from '../../components';

import {stringConst} from '../../helper/constants';
import {icons} from '../../helper/iconConstant';
import {product_list} from '../../helper/localData';
import {hp, statusBar} from '../../helper/utilities';

function Dashboard() {
  const renderItem = ({item, index}) => {
    var brands = item?.brands
      ?.map(e => {
        return e.name;
      })
      .join(', ');

    return (
      <ProductItem
        source={icons.accuprint}
        // source={item?.picture ? {uri: item?.picture} : icons.accuprint}
        productName={item?.productName}
        price={item?.price}
        brands={brands}
        colors={item?.colors}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={stringConst.products} />

      <FlatList
        data={product_list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.footerStyle} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: statusBar,
  },
  footerStyle: {
    height: hp(4),
  },
});
