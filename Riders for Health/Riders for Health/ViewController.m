//
//  ViewController.m
//  Riders for Health
//
//  Created by Scott Lepich on 12/6/13.
//  Copyright (c) 2013 Scott Lepich. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIWebView *webview;

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    
    NSURL *url = [[NSBundle mainBundle] URLForResource:@"index" withExtension:@"html"];
    
    [self.webview loadRequest:[NSURLRequest requestWithURL:url]];
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
