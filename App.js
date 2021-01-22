import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

const App = () => {
    return (
        <>
            <ScrollView>

                <View style={{ flexDirection: 'row' }} >
                    <Image
                        source={ require('./img/bg.jpg') }
                        style={ styles.banner }
                    />
                </View>

                <View style={styles.contenedor}>
                    <Text style={ styles.titulo }>Qué hacer en Paris</Text>
                    <ScrollView horizontal>
                        <View>
                            <Image
                                source={ require('./img/actividad1.jpg') }
                                style={ styles.ciudad }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/actividad2.jpg') }
                                style={ styles.ciudad }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/actividad3.jpg') }
                                style={ styles.ciudad }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/actividad4.jpg') }
                                style={ styles.ciudad }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/actividad5.jpg') }
                                style={ styles.ciudad }
                            />
                        </View>
                    </ScrollView>

                    <View>
                        <Text style={ styles.titulo }>Mejores hoteles</Text>
                        <View>
                            <Image
                                source={ require('./img/mejores1.jpg') }
                                style={ styles.mejores }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/mejores2.jpg') }
                                style={ styles.mejores }
                            />
                        </View>
                        <View>
                            <Image
                                source={ require('./img/mejores3.jpg') }
                                style={ styles.mejores }
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={ styles.titulo }>Hospedaje en L.A.</Text>
                        <View style={styles.listado}>
                            <View style={styles.listadoItem}>
                                <Image
                                    source={ require('./img/hospedaje1.jpg') }
                                    style={ styles.mejores }
                                />
                            </View>
                            <View style={styles.listadoItem}>
                                <Image
                                    source={ require('./img/hospedaje2.jpg') }
                                    style={ styles.mejores }
                                />
                            </View>
                            <View style={styles.listadoItem}>
                                <Image
                                    source={ require('./img/hospedaje3.jpg') }
                                    style={ styles.mejores }
                                />
                            </View>
                            <View style={styles.listadoItem}>
                                <Image
                                    source={ require('./img/hospedaje4.jpg') }
                                    style={ styles.mejores }
                                />
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 200,
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    contenedor: {
        marginHorizontal: 10
    },
    ciudad: {
        width: 200,
        height: 220,
        marginRight: 10
    },
    mejores: {
        width: '100%',
        height: 140,
        marginBottom: 5
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listadoItem: {
        flexBasis: '49%'
    },
})

export default App