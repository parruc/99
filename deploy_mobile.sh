meteor build  ../ --server parruc_99.meteor.com
keytool -genkey -alias 99 -keyalg RSA -keysize 2048 -validity 10000
cd ../android
$JAVA_HOME/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-unsigned.apk 99
if [ -f 99.apk ]; then
    rm 99.apk
fi
$ANDROID_HOME/build-tools/23.0.1/zipalign 4 release-unsigned.apk 99.apk
