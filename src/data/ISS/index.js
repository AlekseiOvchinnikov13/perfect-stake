export const ISS_DATA = [
  {
    title: 'Principles and Objectives',
    href: 'principles-and-objectives',
    content: `The aim is&nbsp;to&nbsp;cover all of&nbsp;the key principles: </br>
              </br>
              <strong>Security:</strong> A&nbsp;validator is&nbsp;subject to&nbsp;severe financial penalties in&nbsp;case of&nbsp;key compromise and duplicate signing of&nbsp;blocks. Ergo, the operational procedures of&nbsp;a&nbsp;validator must guard against these catastrophic events. Ultimately, a&nbsp;validator is&nbsp;like a&nbsp;castle with precious crown jewels to&nbsp;be&nbsp;defended. Our architecture must erect several barriers that prevent external attackers from getting any level of&nbsp;access over the key or&nbsp;signing logic. </br>
              </br>
              <strong>High Availability:</strong> Many networks impose financial penalties for extended downtime. It&nbsp;is&nbsp;generally advisable for validators to&nbsp;have greater than&nbsp;99% uptime. We&rsquo;ve gone the extra mile and are regularly delivering &gt;99.9% uptime in&nbsp;anticipation of&nbsp;future networks that penalize availability to&nbsp;a&nbsp;higher degree. </br>
              </br>
              <strong>Minimize maintenance operations conducted under duress:</strong> Teams maintaining validators are all too familiar with incidents requiring quick responses such as&nbsp;server failures, configuration issues, network attacks, etc. The hard part about validator incident response is&nbsp;the need to&nbsp;perform critical response operations while financial and reputational damage occurs due to&nbsp;downtime. Imagine yourself as&nbsp;a&nbsp;validator operations personnel conducting security-critical operations, while the validator is&nbsp;losing $10k an&nbsp;hour for its delegators. This is&nbsp;a&nbsp;stressful situation, as&nbsp;you can imagine.
              Make security critical infrastructure broadly maintainable: Parts of&nbsp;the architecture will be&nbsp;security critical, and validator teams restrict access to&nbsp;these parts to&nbsp;a&nbsp;select number of&nbsp;trusted personnel. This creates risk and dependency on&nbsp;a&nbsp;small number of&nbsp;personnel to&nbsp;maintain validator operations. We&nbsp;are taking steps that will allow an&nbsp;extended circle of&nbsp;team members to&nbsp;maintain our validators without having sensitive access.`
  },
  {
    title: 'Overview of Key Components',
    href: 'overview-of-key-components',
    content: `There are number of&nbsp;major components to&nbsp;our validation architecture. </br> 
              These components: validation servers, sentry layer, logging &amp;&nbsp;monitoring and analytics.`
  },
  {
    title: 'Validator and Sentry Servers',
    href: 'validator-and-sentry-servers',
    content: `It&nbsp;is&nbsp;recommended for validation servers to&nbsp;not hold the validation keys of&nbsp;the validator, as&nbsp;compromise of&nbsp;the servers could lead to&nbsp;theft of&nbsp;key material. Major decisions we&nbsp;faced regarding validation servers were: How many validation servers to&nbsp;use, where to&nbsp;host them and what software to&nbsp;run on&nbsp;them. </br>
              </br>
              We&nbsp;purchase dedicated servers and purpose them as&nbsp;validation servers, in&nbsp;Tier III&nbsp;&amp; IV&nbsp;data centers with 100% network uptime guarantee. </br>
              </br>
              All selected data centers operate monitored closed circuit television, and are manned by&nbsp;both security and technical personnel 24/7/365. Access to&nbsp;racks is&nbsp;limited to&nbsp;the providers&rsquo; personnel via biometrics and access card controlled man-traps. The data centers are carrier neutral and connected via diverse routes to&nbsp;multiple tier 1&nbsp;connectivity providers, and are monitored 24/7/365 by&nbsp;either a&nbsp;remote or&nbsp;on-site Network Operations Center (NOC). Similarly, both are connected to&nbsp;multiple power substations, and are backed by&nbsp;at&nbsp;least N+1&nbsp;generators. As&nbsp;a&nbsp;result, both vendors offer 100% network connectivity and power SLAs. In&nbsp;addition, in&nbsp;the event of&nbsp;hardware failure, vendors are subject to&nbsp;a&nbsp;one hour hardware replacement SLA.`
  },
  {
    title: 'Sentry Layer',
    href: 'sentry-layer',
    content: 'Sentries are full nodes (for a&nbsp;specific network) placed between the public Internet and the validation servers. Sentry nodes ensure that validation servers are not directly exposed to&nbsp;the public Internet, connect to&nbsp;other full nodes on&nbsp;the network, gossip transactions plus blocks, keep validation servers up&nbsp;in&nbsp;sync with the network, and act as&nbsp;the first line of&nbsp;defense against DDoS attacks. They can also be&nbsp;repurposed for the role of&nbsp;transaction filtering to&nbsp;guard against transaction spam attacks. We&rsquo;ve deployed sentry nodes on&nbsp;AWS or&nbsp;DO, or&nbsp;Hetzner, as&nbsp;they are less security critical than the validation servers.'
  },
  {
    title: 'Logging & Monitoring',
    href: 'logging-monitoring',
    content: `Observability of&nbsp;an&nbsp;Infrastructure estate is&nbsp;one of&nbsp;the most basic, but most powerful tools at&nbsp;the disposal of&nbsp;an&nbsp;engineer. It&nbsp;allows one to&nbsp;view, understand, proactively respond, and be&nbsp;automatically alerted to&nbsp;changes in&nbsp;the behaviour or&nbsp;performance of&nbsp;servers. </br>
              It&nbsp;can be&nbsp;broken down into three main streams:</br>
              </br>
              <strong>Server Metrics:</strong> Information about CPU usage, memory usage, disk utilisation, network performance and&nbsp;IO performance allows better predictions of&nbsp;resource usage. These metrics can be&nbsp;used to&nbsp;diagnose when application upgrades begin leaking memory, and can prevent outages from arising when disk utilisation nears 100% or&nbsp;when components begin to&nbsp;fail. </br>
              </br>
              <strong>Application Metrics:</strong> Metrics produced by&nbsp;applications are collected, aggregated and used for alerting&nbsp;us to&nbsp;potential issues with running applications. In&nbsp;addition to&nbsp;existing metrics endpoints exposed by&nbsp;cosmos-sdk and loom, we&nbsp;also monitor RPC and LCD endpoints to&nbsp;provide supplemental data regarding the networks on&nbsp;which we&nbsp;validate. </br>
              </br>
              We&nbsp;use a&nbsp;combination of&nbsp;Prometheus, Grafana and Node Exporter in&nbsp;a&nbsp;high-availability layout for our internal monitoring, coupled with an&nbsp;external alerting service, which manages 24/7 our on-call rotation, and alert escalation processes. </br>
              </br>
              The onboarding of&nbsp;any new network is&nbsp;not deemed complete until we&nbsp;have sufficient logging and monitoring in&nbsp;place to&nbsp;support the operation of&nbsp;that network.`
  },
  {
    title: 'DDoS Protection',
    href: 'ddos-protection',
    content: `In&nbsp;order to&nbsp;mitigate the impact on&nbsp;hosts of&nbsp;denial of&nbsp;service attacks (Denial of&nbsp;Service Attacks, Wikipedia) we&nbsp;route inbound packets from the public Internet via cloud-provider DDoS protection. </br>
              In&nbsp;addition to&nbsp;our public sentries, we&nbsp;run &rsquo;private&rsquo; sentries behind NAT (Network Address Translation, Wikipedia) gateways that only permit outbound connections so&nbsp;that in&nbsp;the event of&nbsp;a&nbsp;targeted attack against our public nodes, we&nbsp;will be&nbsp;able to&nbsp;continue receipt and transmission of&nbsp;P2P packets to&nbsp;and from the wider network. </br>
              These private sentries are also &lsquo;privately peered&rsquo; with carefully selected partners via cloud-provider network peering, to&nbsp;ensure both parties benefit from each others&rsquo; connectivity even in&nbsp;the harshest of&nbsp;adversarial climates. </br>
              </br>
              <strong>No&nbsp;Public-facing SSH Ports</strong> </br>
              Operation of&nbsp;our nodes is&nbsp;ultimately conducted via SSH&nbsp;&mdash; although we&nbsp;minimise this as&nbsp;much as&nbsp;humanly possible through automation&nbsp;&mdash; but as&nbsp;poorly SSH protected SSH endpoints are a&nbsp;primary target for any intruder, we&nbsp;do&nbsp;not expose SSH on&nbsp;any port (exposing on&nbsp;a&nbsp;non-default port is&nbsp;considered security-through-obscurity, and a&nbsp;poor countermeasure), preferring to&nbsp;utilise an&nbsp;encrypted VPN for all control traffic in&nbsp;and out of&nbsp;our infrastructure.`
  },
  {
    title: 'Gaps and Future Improvements',
    href: 'gaps-and-future-improvements',
    content: 'We&nbsp;have invested a&nbsp;significant amount of&nbsp;energy into building a&nbsp;very secure and highly available validator, but no&nbsp;infrastructure is&nbsp;&laquo;finished&raquo;. There will always be&nbsp;the next *improvement to&nbsp;make; the next defense to&nbsp;introduce into one&rsquo;s setup and the next networks to&nbsp;onboard. We&rsquo;re open to&nbsp;improvement and continuously working on&nbsp;excellence.'
  },
  {
    title: 'Conclusion',
    href: 'conclusion',
    content: `Our operations consist of&nbsp;dedicated servers located in&nbsp;the specialized and highly qualified well-known data centers around the world, using only the highly secure networking and role-model infrastructure setups with the full regular back-up using the N + M&nbsp;scheme, controlled by&nbsp;the external independent watchdog services. </br>
              </br>
              Our team core value is&nbsp;delivering the maximum reliability and security for the various blockchain projects coupled with the maximum transparency for important and respectful delegators. </br>
              </br>
              We&nbsp;are always keen to&nbsp;help out fellow validators with their infrastructure&nbsp;&mdash; give&nbsp;us a&nbsp;shout if&nbsp;we&nbsp;could be&nbsp;of&nbsp;help!`
  },
];