import { StyleSheet, Text, Image, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import * as React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('./images/image1.png'),
        title: 'Best Digital Soulution',
        subtitle: 'Hello  what are you and who are what are you .',
    },

    {
        id: '2',
        image: require('./images/image2.png'),
        title: 'Best Digital Soulution',
        subtitle: 'Hello  what are you and who are what are you .',
    },

    {
        id: '3',
        image: require('./images/image3.png'),
        title: 'Best Digital Solution',
        subtitle: 'Hello  what are you and who are what are you .',
    },
]

const Slide = ({ item }) => {

    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={item.image} style={{ height: '75%', width, resizeMode: 'contain' }} />
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const OnBoarding = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);

    const Footer = () => {
        const navigation = useNavigation();
        return (
            <View style={{ height: height * 0.25, justifyContent: 'space-between', paddingHorizontal: 20, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>{slides.map((_, index) => (
                    <View key={index} style={[styles.indicator, currentSlideIndex == index && { backgroundColor: '#fff', width: 25, },]} />))}
                </View>
                
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity style={[styles.btn]} onPress={() => navigation.replace('SignIn')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000' }} >GET STARTED</Text>
                            </TouchableOpacity>
                        </View>) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={skip} style={[styles.btn, { backgroundColor: 'transparent', borderWidth: 1, borderColor: "#fff", }]}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>SKIP</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 20 }} />
                            <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000' }} >NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                </View>
            </View>
        );
    };

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    return (
        <SafeAreaView style={styles.back}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList ref={ref} onMomentumScrollEnd={updateCurrentSlideIndex} data={slides} contentContainerStyle={{ height: height * 0.75 }} pagingEnabled horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => <Slide item={item} />} />
            <Footer />
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    back: {

        backgroundColor: '#282534',
        height: '100%',
        width: '100%',
    },

    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        lineHeight: 23,
        letterSpacing: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },

    subtitle: {
        color: COLORS.white,
        /* fontWeight: 'bold', */
        lineHeight: 23,
        letterSpacing: 1,
        fontSize: 14,
        marginTop: 15,
        textAlign: 'center',
        width: '70%',
        fontFamily: 'Poppins-Bold',
    },

    indicator: {
        height: 3.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        color: '#000',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        height: 50,
        flex: 1,
        borderRadius: 5,
    },
})