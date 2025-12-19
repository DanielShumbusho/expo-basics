import React, { useState } from 'react';
import { View, Text, Button,Platform, StyleSheet,
  ScrollView,
  Image,
  Pressable,
  LayoutAnimation,
  UIManager, } from 'react-native';
import {Link} from 'expo-router';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

if (Platform.OS === 'android'){
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

export default function ExploreScreen(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            {/*Header*/}
            <View style={styles.header}>
                <Text style={styles.headerIcon}>{'</>'}</Text>
            </View>

            <View style={styles.childContainer}>

                {/*Title*/}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Explore</Text>
                </View>

                <Text style={styles.paragraph}>
                    This app includes example code to help you get started.
                </Text>

                {/* Sections */}
                <CollapsibleSection title="File-based routing">
                    <Text style={styles.paragraph}>
                    This app has two screens:{" "}
                    <Text style={styles.bold}>app/(tabs)/index.tsx</Text> and{" "}
                    <Text style={styles.bold}>app/(tabs)/explore.tsx</Text>
                    </Text>
                </CollapsibleSection>

                <CollapsibleSection title="Android, iOS, and web support">
                    <Text style={styles.paragraph}>
                    You can open this project on Android, iOS, and the web.
                    </Text>
                </CollapsibleSection>

                <CollapsibleSection title="Images">
                    <Image
                    source={require('@/assets/images/react-logo.png')}
                    style={styles.image}
                    />
                </CollapsibleSection>

                {Platform.OS === 'ios' && (
                    <CollapsibleSection title="Animations">
                    <Text style={styles.paragraph}>
                        This example uses LayoutAnimation for simple UI animations.
                    </Text>
                    </CollapsibleSection>
                )}
            </View>
        </ScrollView>

    )
}

function CollapsibleSection({title, children,}:{title:string; children: React.ReactNode;}){
    const [open, setOpen] = useState(false);

    const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
    };

    return(
        <View style={styles.section}>
            <Pressable onPress={toggle} style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text style={styles.chevron}>{open ? '▲' : '▼'}</Text>
            </Pressable>

            {open && <View style={styles.sectionContent}>{children}</View>}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    minHeight: '100%', // space for tab bar
    backgroundColor: '#c8e6faff',
  },
  childContainer:{
    paddingHorizontal: 20,
  },

  header: {
    height: 220,
    backgroundColor: '#88ccfaff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 24,
  },

  headerIcon: {
    fontSize: 180,
    color: '#f3f3f3ff',
    bottom: -40,
    left: -35,
    position: 'absolute',
  },

  titleContainer: {
    marginBottom: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
  },

  paragraph: {
    fontSize: 16,
    color: '#444444ff',
    marginBottom: 12,
  },

  bold: {
    fontWeight: '600',
  },

  section: {
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#a0d7fcff',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  chevron: {
    fontSize: 16,
  },

  sectionContent: {
    padding: 16,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});