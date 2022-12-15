#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "Zoomed.h"

@implementation ZoomedTeste

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
   return YES;
}

- (NSDictionary *)constantsToExport
{
  return @{ @"isZoomed": @([UIScreen mainScreen].scale != [UIScreen mainScreen].nativeScale) };
}

@end