
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Home01Icon,
    Settings01Icon,
    UserIcon,
    ArrowRight01Icon,
    Menu01Icon,
    Search01Icon,
    InformationCircleIcon,
    CheckmarkCircle01Icon,
    AlertCircleIcon,
    Cancel01Icon,
    ViewIcon,
    ViewOffIcon,
    CodeIcon,
    Image01Icon,
    GithubIcon,
    DribbbleIcon,
    Linkedin01Icon,
    Database01Icon,
    Globe02Icon,
    PackageIcon,
    Money03Icon,
    BookOpen01Icon,
    DashboardSquare01Icon,
    Folder01Icon,
    File01Icon,
    Download01Icon,
    PlayCircle02Icon,
    ArrowLeft01Icon,
    ArrowUp01Icon,
    ArrowDown01Icon,
    Sun01Icon,
    Moon01Icon,
    StarIcon,
    Mail01Icon,
    ChartIncreaseIcon,
    TwitterIcon,
} from '@hugeicons/core-free-icons';

/* 
  Mapping of icon names to components for easy string-based usage if needed, 
  or just export the wrapper to use with component directly.
*/

export const ICONS = {
    home: Home01Icon,
    settings: Settings01Icon,
    user: UserIcon,
    arrowRight: ArrowRight01Icon,
    menu: Menu01Icon,
    search: Search01Icon,
    info: InformationCircleIcon,
    check: CheckmarkCircle01Icon,
    alert: AlertCircleIcon,
    "alert-circle": AlertCircleIcon,
    close: Cancel01Icon,
    visible: ViewIcon,
    hidden: ViewOffIcon,
    product: PackageIcon,
    pricing: Money03Icon,
    docs: BookOpen01Icon,
    dashboard: DashboardSquare01Icon,
    projects: Folder01Icon,
    file: File01Icon,
    download: Download01Icon,
    cplay: PlayCircle02Icon,
    code: CodeIcon,
    image: Image01Icon,
    github: GithubIcon,
    dribbble: DribbbleIcon,
    linkedin: Linkedin01Icon,
    server: Database01Icon, // Using Database icon for server context
    globe: Globe02Icon,
    "chevron-left": ArrowLeft01Icon,
    "chevron-right": ArrowRight01Icon,
    "chevron-up": ArrowUp01Icon,
    "chevron-down": ArrowDown01Icon,
    sun: Sun01Icon,
    moon: Moon01Icon,
    star: StarIcon,
    mail: Mail01Icon,
    "trending-up": ChartIncreaseIcon,
    twitter: TwitterIcon,
};

export type IconName = keyof typeof ICONS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name?: IconName;
    icon?: any; // allow passing icon data directly
    size?: number | string;
    color?: string;
    className?: string;
}

/**
 * atomic icon component
 * Wraps @hugeicons/react HugeiconsIcon.
 */
export function Icon({
    name,
    icon: iconData,
    size = 20,
    color = "currentColor",
    className = "",
    ...props
}: IconProps) {

    const finalIcon = iconData || (name ? ICONS[name] : null);

    if (!finalIcon) {
        console.warn(`Icon "${name}" not found and no component provided.`);
        return null;
    }

    return (
        <HugeiconsIcon
            icon={finalIcon}
            size={size}
            color={color}
            className={`inline-block align-middle ${className}`}
            {...(props as any)}
        />
    );
}
