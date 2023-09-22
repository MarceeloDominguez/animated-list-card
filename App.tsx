import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import itemsArray from './data/data';

// const itemsArray: Item[] = new Array(10)
//   .fill(0)
//   .map((_, index) => ({id: index}));

function App(): JSX.Element {
  const [items, setItems] = useState(itemsArray);

  const onDelete = (itemId: number) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
        <View style={{paddingBottom: 220, paddingTop: 20}}>
          {items.map((item, index) => {
            return (
              <Animated.View
                entering={FadeIn.delay(150 * index)}
                exiting={FadeOut}
                layout={Layout.delay(150)}
                onTouchEnd={() => onDelete(item.id)}
                key={item.id}
                style={[styles.item, {backgroundColor: item.color}]}>
                <View>
                  <View style={[styles.wrapRowsCard, {marginBottom: 5}]}>
                    <Text style={styles.textRowHeader}>{item.name}</Text>
                    <Text style={styles.textRowHeader}>Debit Card</Text>
                  </View>
                  <View style={styles.wrapRowsCard}>
                    <Text style={styles.numberCard}>{item.numberCard}</Text>
                    <Text style={styles.numberCard}>{item.date}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.titleBalance}>Your Balance</Text>
                  <View style={[styles.wrapRowsCard]}>
                    <Text style={styles.balance}>${item.balance}</Text>
                    <Image
                      source={require('./assets/logo-card.png')}
                      style={styles.logoMasterCard}
                    />
                  </View>
                </View>
                <Image
                  source={require('./assets/v-card.png')}
                  style={styles.vectorCard}
                />
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  item: {
    height: 210,
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 16,
    elevation: 10,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  wrapRowsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textRowHeader: {
    color: '#f3f3f3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleBalance: {
    color: '#f3f3f3',
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.8,
    marginBottom: 4,
  },
  balance: {
    fontSize: 25,
    color: '#f3f3f3',
    fontWeight: 'bold',
  },
  typeCard: {
    color: '#f3f3f3',
    fontSize: 15,
  },
  numberCard: {
    fontSize: 20,
    color: '#f3f3f3',
    fontWeight: '500',
  },
  logoMasterCard: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  vectorCard: {
    position: 'absolute',
    width: 380,
    height: 210,
  },
});

export default App;
