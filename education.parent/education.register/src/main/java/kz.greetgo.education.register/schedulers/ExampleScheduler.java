package kz.greetgo.education.register.schedulers;

import kz.greetgo.depinject.core.Bean;
import kz.greetgo.scheduling.HasScheduled;
import kz.greetgo.scheduling.Scheduled;

@Bean
public class ExampleScheduler implements HasScheduled{

  @Scheduled("repeat every 13 sec")
  public void example(){
    System.out.println("schedule running");
  }
}
