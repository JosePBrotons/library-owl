package com.wolox;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.tsepeti.splashscreen.RCTSplashScreen;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      RCTSplashScreen.openSplashScreen(this);
      super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "wolox";
  }
}
